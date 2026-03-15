module palindrome_number::palindrome_number;

// ============================================================
// PUZZLE #8 — Palindrome Number Checker
// ============================================================

/// Check whether `n` is a palindrome number.
/// Input:  A non-negative integer n
/// Output: true if n reads the same forwards and backwards
public fun is_palindrome(n: u64): bool {

    // Store the original number
    let original = n;

    // Variables to reverse the number
    let mut temp = n;
    let mut reversed: u64 = 0;

    // Build reversed number
    while (temp > 0) {

        let digit = temp % 10;
        reversed = reversed * 10 + digit;
        temp = temp / 10;

    };

    // Compare reversed with original
    reversed == original
}