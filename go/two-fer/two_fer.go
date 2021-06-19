// Package twofer implements a ShareWith function
// ShareWith returns "One for you, one for me" using either the provided name or "you"
package twofer

import "fmt"

// Returns "One for you, one for me." using either the name or "you"
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return fmt.Sprintf("One for %v, one for me.", name)
}
