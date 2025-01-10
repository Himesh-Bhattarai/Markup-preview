$(document).ready(function () {
    // Default Markdown content
    const defaultMarkdown = `
# Heading 1
## Heading 2
**Bold Text**

[Link](https://example.com)

\`Inline Code\`

\`\`\`
Code Block
\`\`\`

- List Item 1
- List Item 2

> Blockquote

![Image](https://via.placeholder.com/150)
  `;

    renderer.paragraph = function (text) {
        return `<p>${text.replace(/\n/g, '<br>')}</p>`;
    };

    // Update marked options to use the custom renderer
    marked.setOptions({
        renderer: renderer
    });

    // Set default content in the editor and preview
    $('#editor').val(defaultMarkdown);
    $('#preview').html(marked.parse(defaultMarkdown));

    // Update preview as the user types
    $('#editor').on('input', function () {
        const markdown = $(this).val();
        $('#preview').html(marked.parse(markdown));
    });
});