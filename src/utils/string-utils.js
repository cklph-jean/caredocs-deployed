export function PageTitle(title) {
    // Capitalize first letter
    title = title.charAt(0).toUpperCase() + title.slice(1);
    
    // Remove special characters using regular expression
    title = title.replace(/[^a-zA-Z0-9 ]/g, ' ');
    
    return title;
}
