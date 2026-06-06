/**
 * Phoenix Yard Sales Color Palette
 * Centralized color system for consistent theming across the web app
 */

export const COLORS = {
  // Primary Colors
  primary: '#FF5747',
  primaryDark: '#E63E2E',
  primaryLight: '#FF7A6B',

  // Background Colors
  background: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceSecondary: '#F5F5F5',

  // Text Colors
  text: '#1E3A5F',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textInverse: '#FFFFFF',

  // Border Colors
  border: '#E5E7EB',
  borderFocus: '#FF5747',
  borderError: '#DC2626',

  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#DC2626',
  info: '#3B82F6',

  // Semantic Colors
  verified: '#10B981',
  unverified: '#F59E0B',
  disabled: '#D1D5DB',
} as const;

export default COLORS;
