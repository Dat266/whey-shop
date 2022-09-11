import Input from "../Input";

function Search({ brandName }) {
	const TH = [
		"Plus One",
		"Fitbit",
		"GU Energy",
		"Venum",
		" Purely Inspired",
		" Tailwind Nutrition",
	];

	const renderTH = TH.map((item) => {
		return <Input type="checkbox" label={item} className="mr-2 w-4 h-4 ml-1" />;
	});
	return (
		<div className="w-72 h-36 relative mt-16">
			<div className="h-10 ">
				<h1 className="uppercase font-medium text-xl">{brandName}</h1>
				<div>
					<Input
						type="text"
						className=" absolute w-full p-1 rounded-md border-2 outline-none
						mt-5
					"
					/>
				</div>
				<div className="mt-20 overflow-auto h-40 text-2xl capitalize">
					{renderTH}
				</div>
			</div>
		</div>
	);
}

export default Search;
