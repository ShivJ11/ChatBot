function getBotResponse(input) {
	if (input == "rock") {
		return "paper";
	} else if (input == "paper") {
		return "scissors";
	} else if (input == "scissors") {
		return "rock";
	}
	// Simple responses
	if (input == "hello" || input == "hi" || input == "hey") {
		return "Hello there!" + ch;
	} else if (input == "goodbye") {
		return "Talk to you later!";
	} else {
		return "Try asking something else! ";
	}
	
}