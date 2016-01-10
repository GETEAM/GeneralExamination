#VideoComment(视频评述)

##实际样题

下面是段视频，请看完后评述该视频
A video

##JSON结构

	{
		"stem": "下面是段视频，请看完后评述该视频 <video src="youku.mp4">",	
		"show-stem-length": false,
		"flowable": true,
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