#SimilarExpressions(近义词替换)

##实际样题

All of you friends will **support** you.

A. stand up for

B. be against

C. care for

D. stand around

##JSON结构

	{
		"stem": "All of you friends will support you.",
		"show-stem-length": false,
		"flowable": false,
		"questions-num-limit": true,
		"pre-show": true,
		"questions": [
			{
				"type": "SingleChoice",
				"shuffle": true,
				"show-options-content": true,
				"options": [   
					"stand up for",
					"be against",
					"care for",
					"stand around"
				]
				"strict": true,
				"reference-answer": 1,
				"answer-analysis": "参考答案解析"
			}
		]
	}