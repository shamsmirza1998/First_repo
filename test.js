// Simple test script
const expected = "Hello, CI/CD World!";
const actual = "Hello, CI/CD World!";

if (expected === actual) {
    console.log("Test Passed!");
    process.exit(0);
} else {
    console.log("Test Failed!");
    process.exit(1);
}
