
# Changelog

## [1.1.6] - 2026-02-02

### Fixed
- Fixed error message formatting consistency in logging
- Corrected spacing in `Logger.error()` calls for better code style
- Fixed interception logic to ensure blocking operations work properly

### Added
- Added `DebugConfigurationProvider` for pre-launch interception during debug configuration resolution phase
- Improved debug session blocking by intercepting at configuration parsing stage (before launch)

### Improved
- Enhanced error handling in debug configuration validation
