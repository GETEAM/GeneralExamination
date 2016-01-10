#PictureComment(图片评述)

##实际样题

![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)

##JSON结构

	{
		"stem": "<img src="picture.jpg">",
		"show-stem-length": false,
		"flowable": false,
		"questions-num-limit": true,
		"pre-show": true,	
		"questions": [
			{
				"type": "Record",
				"stem": "录音提示音<audio src="abc.mp3">",	
				"pause": 120,	
				"strict": false,
				"reference-answer": "略",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
