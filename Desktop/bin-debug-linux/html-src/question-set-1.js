/**
question_type: MCQ-<N>, NUM-<DIGITS>, STR-<CHARACTERS>
**/
var const_MCQ = "MCQ";
var const_NUM = "NUM";
var const_STR = "STR";

function isQuestionMCQ(question)
{
	return question.question_type.indexOf(const_MCQ) != -1;
}

function isQuestionNUM(question)
{
	return question.question_type.indexOf(const_NUM) != -1;
}

function isQuestionSTR(question)
{
	return question.question_type.indexOf(const_STR) != -1;
}

function answerLength(question)
{
	return (question.question_type.split('-'))[1];	
}

var questions = 
	[
		{
			"question_text":"This is text 111",
			"question_type":"MCQ-4",
			"choices":
			[
				{
					"choice_text":"choice1"
				},
				{
					"choice_text":"choice2"
				},
				{
					"choice_text":"choice3"
				},
				{
					"choice_text":"choice4"
				}
			],
			"answer":"choice3",
			"explanation":"Some arbit explanation for choice3"
		},
		{
			"question_text":"This is text 222",
			"question_type":"NUM-2",
			"answer":"23",
			"explanation":"Some arbit explanation for 23"
		}
	];