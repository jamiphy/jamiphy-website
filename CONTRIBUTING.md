### Contributing to Jamiphy Website

This repo uses Conventional Commits for all commits. Keep it simple: we do not use scopes.

## Conventional Commits

Use the form:

```
<type>: <subject>

[optional body]

[optional footer(s)]
```

Subject rules:

- Imperative mood, no trailing period, ≤ 72 characters
- UTF‑8 allowed; avoid emoji in the subject

Accepted types:

- `build` – build system or external dependencies (e.g., package.json, tooling)
- `chore` – maintenance (no app behavior change)
- `ci` – continuous integration configuration (workflows, pipelines)
- `docs` – documentation only
- `feat` – user-facing feature or capability
- `fix` – bug fix
- `perf` – performance improvements
- `refactor` – code change that neither fixes a bug nor adds a feature
- `revert` – revert of a previous commit
- `style` – formatting/whitespace (no code behavior)
- `test` – add/adjust tests only

Examples:

```text
feat: add hero CTA to home page
fix: correct contact link in navbar
docs: add deployment notes
style: format HTML and normalize indentation
chore: update .gitignore for macOS artifacts
```

Breaking changes:

- Use `!` after the type or a `BREAKING CHANGE:` footer.

```text
feat!: reorganize pages into /about and /contact directories

BREAKING CHANGE: URLs changed; update any external links.
```
