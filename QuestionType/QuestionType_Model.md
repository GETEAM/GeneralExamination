#试题类型(item)----JSON结构

	{	
		"stem": {
			"type": String,
			"default": "",
			"description": "试题题干，题干中可包含文本、图片，流程性试题可额外包括音频和视频。默认为空(可缺省)",
			"sample": "We will have a _________ holiday after the exam。"
		},
		"show-stem-length": {
			"type": Boolean,
			"default": false,
			"description": "该字段标识是否在题干末尾显示题干字数(题干字数自动计算)，默认为false(即不显示)，可作修改。"
		},
		"flowable": {
			"type": Boolean,
			"default": false,
			"description": "该字段表示试题是否为流程性试题。听力试题、口语试题等题型是按照一定的流程完成播放、显示、答题整个过程，其用时是已知的，称为流程性试题。默认为false(非流程性试题)"
		},
		"shuffle": {
			"type": Boolean,
			"default": false,
			"description": "该字段针对选项顺序是否打乱。当试题存在options属性，该字段标识试题选项是否打乱顺序，当试题不存在试题选项时，该字段标识选择型小题选项顺序是否打乱。默认false(即不打乱)，可作修改。"
		},
		"show-options-order-num": {
			"type": Boolean,
			"default": true,
			"description": "该字段标识试题选项是否显示选项序号(如A/B/C/D)，一般都是显示以供选择，不显示主要针对于选词变形填空的题型。默认为true(显示试题选项序号)"
		},
		"options": {
			"type": Array,
			"default": null,
			"description": "该字段包含一个数组，数组中各元素为试题的试题选项，如选词填空，排序题中的选项。该字段默认为空(即不包含试题选项)",
			"sample": [
				"item选项1",
				……
				"item选型n"
			]
		},
		"questions-num-limit": {
			"type": Boolean,
			"default": true,
			"description": "该字段标识试题是否限制小题数量。不限制小题数量的题型，在添加具体试题时，可以以任一小题为模板额外增加小题。限制小题数量时，不可额外增加小题。该字段默认为true(限制小题数量)"
		},
		"pre-show": {
			"type": Boolean,
			"defalult": true,
			"description": "该字段标识是否提前显示试题所包含的各小题（题型可能需求小题先隐藏达到一定条件后显示，一般在流程性试题中使用，当听力或视频播放结束后显示小题）。该字段默认为true(提前显示各小题)，可作修改。"
		},
		"show-options-content": {
			"type": Boolean,
			"defalut": true,
			"description": "当试题已有试题选项时，小题选项文本默认false(不显示)，只显示选项序号。当小题选项存在时，默认为true(显示)"
		}
		"questions": {
			"type": Array,
			"default": [],
			"descripiton": "该字段包含一个数组，数组中各元素为试题包含的各小题，每个元素为一个小题(为一个对象，格式见下)。该字段默认不可缺省(即试题必须存在小题)",
			"sample": [			
				question1,
				……
				questionn
			]
		}
	}

#question----JSON结构

	{
		"type": {
			"type": String,
			"defalut": "小题基本类型之一",
			"description": "该字段为小题类型，基本类型中的一个，SingleChoice(单选）、BlankFilling(填空）、MultipleChoice(多选)、SimpleAnswer(简答)、Record(录音）、Sorting(排序)、TrueOrFalse(判断题)、Correction(改错题)。该字段不可为空，默认为基本题型中的一个。"
			"sample": "SingleChoice"
		},
		"stem": {
			"type": String,
			"default": "",
			"description": "该字段为小题题干，可以包含文本、图片、音频和视频。默认为空"
		},
		"pause": {
			"type": Integer,
			"default": 0,
			"description": "如果小题为流程性试题，该字段标识流程性试题答题时长。如果为听力题，则为听力答题时长，如果为录音题，则为录音时长。默认为0"
		},
		"options": {
			"type": Array,
			"default": [],
			"description": "该字段为小题选项，当小题类型为选择题时，才存在",
			"sample": [
				"小题选项1",
				……
				"小题选项n"
			]
		},
		"strict": {
			"type": Boolean,
			"default": true,
			"description": "该参数标识所填答案是否和参考答案完全匹配。true，表示完全匹配为正确；false，表示参考答案仅供参考"
		},
		"reference-answer": {
			"type": String/Integer,
			"default": "",
			"description": "该参数为小题的参考答案。选择题为选项编号，从0开始。填空题时为字符串。可缺省，默认为空"
		},
		"answer-analysis": {
			"type": String,
			"default": "",
			"description": "该参数为小题的参考答案解析。可缺省，默认为空"
		}
 	}
