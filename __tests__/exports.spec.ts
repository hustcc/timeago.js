// @vitest-environment node
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import ts from 'typescript';

describe('package type exports', () => {
  let directory: string;

  beforeAll(() => {
    execFileSync('npm', ['run', 'build'], { cwd: resolve(__dirname, '..'), stdio: 'pipe' });
    directory = mkdtempSync(join(tmpdir(), 'timeago-types-'));
    mkdirSync(join(directory, 'node_modules'));
    symlinkSync(resolve(__dirname, '..'), join(directory, 'node_modules', 'timeago.js'), 'dir');
  }, 120000);

  afterAll(() => {
    if (directory) rmSync(directory, { recursive: true, force: true });
  });

  for (const mode of ['bundler', 'node16', 'nodenext'] as const) {
    for (const kind of mode === 'bundler' ? ['import'] : ['import', 'require']) {
      test(`${mode} ${kind} resolves and checks declarations`, () => {
        const importing = kind === 'import';
        const file = join(directory, importing ? 'consumer.mts' : 'consumer.cts');
        const imports = [
          "import { format } from 'timeago.js';",
          "import { format as libFormat } from 'timeago.js/lib/format';",
          ...(importing ? ["import { format as esmFormat } from 'timeago.js/esm/format';"] : []),
          ...(mode === 'bundler' || !importing ? ["import fr from 'timeago.js/lib/lang/fr';"] : []),
        ];
        writeFileSync(file, `${imports.join('\n')}\nconst result: string = format(Date.now()); libFormat(Date.now());\n${importing ? 'esmFormat(Date.now());' : ''}\n${mode === 'bundler' || !importing ? 'fr(1, 0);' : ''}\n`);

        const options: ts.CompilerOptions = {
          strict: true,
          noEmit: true,
          target: ts.ScriptTarget.ES2017,
          module: mode === 'bundler' ? ts.ModuleKind.ESNext : mode === 'node16' ? ts.ModuleKind.Node16 : ts.ModuleKind.NodeNext,
          moduleResolution: mode === 'bundler' ? ts.ModuleResolutionKind.Bundler : mode === 'node16' ? ts.ModuleResolutionKind.Node16 : ts.ModuleResolutionKind.NodeNext,
        };
        const resolutionMode = importing ? ts.ModuleKind.ESNext : ts.ModuleKind.CommonJS;
        const expected = [
          ['timeago.js', 'dist/index.d.ts'],
          ['timeago.js/lib/format', `dist/${importing ? 'esm' : 'lib'}/format.d.ts`],
          ...(importing ? [['timeago.js/esm/format', 'dist/esm/format.d.ts']] : []),
        ];
        for (const [specifier, path] of expected) {
          const result = ts.resolveModuleName(specifier, file, options, ts.sys, undefined, undefined, resolutionMode);
          expect(result.resolvedModule?.resolvedFileName).toBe(resolve(__dirname, '..', path));
        }
        const program = ts.createProgram([file], options);
        expect(ts.getPreEmitDiagnostics(program).map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n'))).toEqual([]);
      });
    }
  }
});
