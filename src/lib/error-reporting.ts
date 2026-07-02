type ErrorReportingContext = Record<string, unknown>;

export function reportClientError(_error: unknown, _context: ErrorReportingContext = {}) {
  // Intentionally a no-op by default.
  // This is a safe extension point for future integrations (e.g., Sentry)
  // without coupling the codebase to any external tooling.
}
