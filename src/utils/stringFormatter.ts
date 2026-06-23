/**
 * Formats a multi-line string for use in TypeScript/JavaScript objects
 * @param content - The multi-line content to format
 * @returns Formatted string that can be safely used in object properties
 */
export function formatMultiLineString(content: string): string {
    return content
        .replace(/\n/g, ' ')           // Replace newlines with spaces
        .replace(/\s+/g, ' ')          // Replace multiple spaces with single space
        .replace(/"/g, '\\"')          // Escape double quotes
        .replace(/'/g, "\\'")          // Escape single quotes
        .trim();                       // Remove leading/trailing whitespace
}

/**
 * Formats a multi-line string as a template literal for use in TypeScript/JavaScript objects
 * @param content - The multi-line content to format
 * @returns Formatted template literal string
 */
export function formatAsTemplateLiteral(content: string): string {
    return `\`${content.replace(/`/g, '\\`')}\``;
}

/**
 * Formats a multi-line string as a concatenated string for use in TypeScript/JavaScript objects
 * @param content - The multi-line content to format
 * @returns Formatted concatenated string
 */
export function formatAsConcatenatedString(content: string): string {
    return content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => `"${line.replace(/"/g, '\\"')}"`)
        .join(' + \n    ');
} 