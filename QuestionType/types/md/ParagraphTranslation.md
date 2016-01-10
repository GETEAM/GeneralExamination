#ParagraphTranslation(段落翻译)

##实际样题

中国是世界上最古老的文明之一。构成现在世界基础的许多元素都起源于中国。中国现在拥有世界上发展最快的经济，并经历着一次新的工业革命。中国还启动了雄心勃勃的太空探索计划，其实包括到2020年建成一个太空站。目前，中国是世界上最大的出口国之一，并正在吸引大量外国投资。同时，它也在海外投资数十亿美元。2011年，中国超越日本成为第二大经济体。

##JSON结构

	{
		"stem": "中国是世界上最古老的文明之一.构成现在世界基础的许多元素都起源于中国。中国现在拥有世界上发展最快的经济，并经历着一次新的工业革命。中国还启动了雄心勃勃的太空探索计划，其实包括到2020年建成一个太空站。目前，中国是世界上最大的出口国之一，并正在吸引大量外国投资。同时，它也在海外投资数十亿美元。2011年，中国超越日本成为第二大经济体。",
		"show-stem-length": false,
		"flowable": false,
		"questions-num-limit": true,
		"pre-show": true,
		"questions": [			
			{
				"type": "SimpleAnswer",		
				"strict": false,
				"reference-answer": "China is one of the oldest cultures in the world, from which much that constructs the foundation of the modern world is derived. China is witnessing the fastest development ofits economy and experiencing a new industrial revolution. Also, China has started the ambitious program forexploring the outer space, including to complete a space station by2020. Currently, being one of the largest exporters in the world,China is attracting massive foreign investment. Simultaneously, it has invested billions of dollars overseas. In 2011, China surpassed Japan as the world’s second-largesteconomy.",		
				"answer-analysis": 前两句话都是简单句，抓住共同点China,可以用定从合并在一起;第三句两个简单句并列;第四句注意2020是将来时间，非谓语应采取to do 形式，如果用谓语要用将来完成时;第五句简单句并列，为避免单调，可以采取非谓语结构第六、第七句简单句"
			}
		]
	}