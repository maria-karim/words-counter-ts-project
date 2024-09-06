#! /usr/bin/env node
import inquirer from 'inquirer';
// Function to count words and characters (excluding whitespaces)
function countWordsAndCharacters(text) {
    const words = text.trim().split(/\s+/); // Split text by whitespace
    const charCount = text.replace(/\s+/g, '').length; // Remove whitespace and count characters
    return {
        wordCount: words.length,
        charCount: charCount,
    };
}
async function getUserParagraph() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'paragraph',
            message: 'Please enter a paragraph of text:',
        },
    ]);
    const { wordCount, charCount } = countWordsAndCharacters(answer.paragraph);
    console.log(`Word Count: ${wordCount}`);
    console.log(`Character Count (excluding spaces): ${charCount}`);
}
// Run the program
getUserParagraph();
