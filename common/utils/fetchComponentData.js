// for use on server to guarantee data was fetched before rendering pages for user
export default function fetchComponentData(dispatch, getComponent, params)
{
	let needs = [];
	if(undefined !== getComponent.needs)
	{
		needs = getComponent.needs.map((data, key) => {
			return data;
		});
	}

	const promises = needs.map(need => dispatch(need(params)));
	return Promise.all(promises);
}
