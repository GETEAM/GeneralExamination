$(function(){
	var capitalLetterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	//单选试题
	var item = {
		"id": 2015,						
		"type": "BlankedCloze",			
		"level": 2,						
		"duration": 12,					
		"flowable": true,				
		"recommendation-point": 2,		
		"direction": "In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter on Answer Sheet 2 with a single line through the centre. You may not use any of the words in the bank more than once.",
		"stem": "<p>Global warming is a trend toward warmer conditions around the world. Part of the warming is natural; we have experienced a 20,000 -year -long warming as the last ice age ended and the ice ( 1 ) away. However, we have already reached temperatures that are in ( 2 ) with other minimum-ice periods, so continued warming is likely not natural. We are ( 3 ) to a predicted worldwide increase in temperatures ( 4 ) between 1℃ and 6℃ over the next 100 years. The warming will be more ( 5 ) in some areas, less in others, and some places may even cool off. Likewise, the ( 6 ) of this warming will be very different depending on where you are—coastal areas must worry about rising sea levels, while Siberia and northern Canada may become more habitable (宜居的) and ( 7 ) for humans than these areas are now.</p><p>The fact remains, however, that it will likely get warmer, on ( 8 ) , everywhere. Scientists are in general agreement that the warmer conditions we have been experiencing are at least in part the result of a human-induced global warming trend. Some scientists ( 9 ) that the changes we are seeing fall within the range of random (无规律的) variation—some years are cold, others warm, and we have just had an unremarkable string of warm years ( 10 ) —but that is becoming an increasingly rare interpretation in the face of continued and increasing warm conditions.</p>",
		"src": { 		//题干中包含的视频、音频以及图片的地址
			"image": "图片地址",
			"audio": "音频地址",
			"video": "视频体质"
		},
		"shuffle": "当itemoption存在时，指定是否可以乱序",
		"item-options": [
			"appealing",
			"average",
			"contributing",
			"dramatic",
			"frequently",
			"impact",
			"line",
			"maintain",
			"melted",
			"persist",
			"ranging",
			"recently",
			"resolved",
			"sensible",
			"shock"
		],
		"questions": [
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			},
			{
				"type": "SingleChoice",
				"strict": true,
				"reference-answer": "contributing",
				"answer-analysisi": "答案解析"
			}
		] 
	}

	//试题item的direnction
	// var ItemDirection = React.createClass({
	// 	render: function() {
	// 		return (
	// 			<div className="item-direction">
	// 				<span className="direction-title">Directions: </span>
	// 				<span className="direction-content">{this.props.direction}</span>
	// 			</div>
	// 		);
	// 	}
	// });

	//试题item题干
	var ItemStem = React.createClass({
		render: function() {
			var stem = {
				'__html': this.props.stem
			}
			return (
				<div className="item-stem" dangerouslySetInnerHTML={stem}></div>
			);
		}
	}); 

	//试题item的options
	var ItemOptions = React.createClass({
		optionsToTableRows: function() {
			var options = this.props.options;
			var tableRows = [];
			for( var i = 0, len = options.length; i < len; i = i + 2 ){
				var td2 = options[i+1] ? <td>{capitalLetterArr[i+1]}.{options[i+1]}</td> : <td></td>;
				var tempRow = 
					<tr>
						<td>{capitalLetterArr[i]}.{options[i]}</td>
						{td2}
					</tr>;
				tableRows.push(tempRow);
			}
			return tableRows;
		},
		render: function() {
			var options = this.props.options;
			return (
				<table className="table table-bordered table-striped table-condensed item-options">
					<tbody>
						{this.optionsToTableRows()}
					</tbody>
				</table>
			)
		}
	});

	//试题item内的questions
	var ItemQuestions = React.createClass({
		render: function() {
			var itemOptionsNum = this.props.itemOptionsNum;
			var questions = this.props.questions;
			var itemId = this.props.itemId;
			var questionsArr = questions.map(function( v, i, arr ){
				var questionId = itemId + "_" + i;
				var questionStem = questions[i].stem 
					? <p className="question-stem">{i+1} {questions[i].stem}</p> 
					: <span className="question-stem">{i+1} </span>;
				var questionOptions = [];
				for(var i = 0; i < itemOptionsNum; i++){
					var option = 
						<label className="question-option">
							<input type="radio" name={questionId} value={i} />
							<span>{capitalLetterArr[i]}</span>
						</label>;
					questionOptions.push(option);
				}

				return (
					<div id={questionId}>
						{questionStem}
						{questionOptions}
					</div>
				);
			});
			return (
				<div className="item-questions">
					{questionsArr}
				</div>
			);
		}
	});

	//试题item框
	var ItemBox  = React.createClass({
		render: function() {
			var itemOptions = this.props.data['item-options'] ?　<ItemOptions options={this.props.data['item-options']} /> : '';
			return (
				<div className="item">
					<ItemStem stem={this.props.data.stem} />
					{itemOptions}
					<ItemQuestions questions={this.props.data.questions} itemOptionsNum={this.props.data['item-options'].length ? this.props.data['item-options'].length : 0} itemId={this.props.data.id} /> 
				</div>
			);
		}
	});

	ReactDOM.render(
		<ItemBox data={item} />,
		document.getElementById('item-content')
	);
});