function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
		const allProps = Object.assign({}, this.state);

		const ChooseCharts = props => {
			if (props.horizontal) {
				return "Charts horizontal";
			} else {
				return "Charts";
			}
		}

		const Charts = props => {
			return (
				<div className={ChooseCharts}>
					{props.children}
				</div>
			);
		}

		const ChartsSerie = props => {
			const {className, height, serieIndex} = props;
			return (
				<div className={className} style={{height: height}} key={serieIndex}>
					{props.children}
				</div>
			);
		}

		const ChartsItem = props => {
			const {className, style, itemIndex} = props;
			return (
				<div className={className} style={style} key={itemIndex}>
					{props.children}
				</div>
			);
		}

		const Legend = props => {
			return (
				<div className={props.className}>
					{props.children}
				</div>
			);
		}

		const Label = props => {
			const {type} = props;
			return (
				<label>{type}</label>
			);
		}

		const LegendItem = props => {
			const {colors, label, labelIndex} = props;
			return (
				<div>
					<span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}}/>
          <span className="Legend--label">{label}</span>
				</div>
			)
		}

		return (
			<section>
        <Charts>
          { data.map((serie, serieIndex) => {
            var sortedSerie = serie.slice(0),
              sum;

            sum = serie.reduce((carry, current) => carry + current, 0);
            sortedSerie.sort(compareNumbers);

            return (
              <ChartsSerie
								{...allProps}
								className={"Charts--serie"}
								height={250}
                serieIndex={ serieIndex }
              >
              <Label type={labels[serieIndex]}></Label>
              { serie.map((item, itemIndex) => {
                var color = colors[itemIndex], style,
                  size = item / (max) * 100;

                style = {
                  backgroundColor: color,
                  opacity: item/max + .05,
                  zIndex: item,
                  height: size + '%'
                };

              return (
                <ChartsItem
									{...allProps}
                  className={"Charts--item"}
                  style={ style }
                  itemIndex={ itemIndex }
                >
                  <b style={{ color: color }}>{ item }</b>
                 </ChartsItem>
              );
              }) }
              </ChartsSerie>
            );
          }) }
        </Charts>

        <Charts>
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
							<ChartsSerie
								{...allProps} 
								className={"Charts--serie stacked"}
								height = {250}
  				 			serieIndex={ serieIndex }
  						>
  						<Label type={ labels[serieIndex] }></Label>
  						{ serie.map((item, itemIndex) => {
  							var color = colors[itemIndex], style,
  								size = item / sum * 100;

  							style = {
  								backgroundColor: color,
  								opacity: 1,
  								zIndex: item,
                  height: size + '%'
  							};

  						 return (
  							 <ChartsItem
								 	{...allProps}
  							 	className={"Charts--item stacked"}
  							 	style={ style }
  								itemIndex={ itemIndex }
  							>
  							 	<b style={{ color: color }}>{ item }</b>
  							 </ChartsItem>
  						);
  						}) }
  						</ChartsSerie>
  					);
  				}) }
  			</Charts>

        <div className="Charts">
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
							<ChartsSerie
								{...allProps} 
								className={"Charts--serie layered"}
								height={250}
  				 			serieIndex={ serieIndex }
  						>
  						<Label type={ labels[serieIndex] }></Label>
  						{ serie.map((item, itemIndex) => {
  							var color = colors[itemIndex], style,
  								size = item / (max) * 100;

  							style = {
  								backgroundColor: color,
  								opacity: (item/max + .05),
  								zIndex: item,
                  height: size + '%',
                  right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
  							};

  						 return (
  							 <ChartsItem
								 	{...allProps}
  							 	className={"Charts--item layered"}
  							 	style={ style }
  								itemIndex={ itemIndex }
  							>
  							 	<b style={{ color: color }}>{ item }</b>
  							 </ChartsItem>
  						);
  						}) }
  						</ChartsSerie>
  					);
  				}) }
  			</div>

        <div className="Charts horizontal">
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
							<ChartsSerie 
								{...allProps}
							  className={"Charts--serie"}
								height={'auto'} 
								serieIndex={ serieIndex }
  						>
  						<Label type={ series[serieIndex] }></Label>
  						{ serie.map((item, itemIndex) => {
  							var color = colors[itemIndex], style,
  								size = item / (max) * 100;

  							style = {
  								backgroundColor: color,
  								opacity: (item/max + .05),
  								zIndex: item,
                  width: size + '%'
  							};

  						 return (
  							 <ChartsItem
								 	{...allProps}
  							 	className={"Charts--item"}
  							 	style={ style }
  								itemIndex={ itemIndex }
  							>
  							 	<b style={{ color: color }}>{ item }</b>
  							 </ChartsItem>
  						);
  						}) }
  						</ChartsSerie>
  					);
  				}) }
  			</div>

        <Legend className={"Legend"}>
    			{ labels.map((label, labelIndex) => {
    				return (
    				<LegendItem
							{...allProps}
							labelIndex={labelIndex}
							label={label}
						>
    				</LegendItem>
    				);
    			}) }
    		</Legend>
			</section>
		);
	}
}
