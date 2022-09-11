import Search from "../Search";

function Product() {
	const productlists = [
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 15,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
		{
			image:
				"https://product.hstatic.net/1000185761/product/combo-3-sp-applie-nutrition_f987d600e667450187c627827ac75818_medium.jpg",
			description: "Combo tăng cơ tăng sức mạnh & phục hồi cơ hiệu quả",
			price: 3175000,
			sale: 50,
		},
	];

	const renderProduct = productlists.map((product) => {
		return (
			<div className="  w-64 my-8 ml-4 text-center hover:border-2">
				<a href="#">
					<img src={product.image} className="" />
					<h1 className="font-medium my-4">{product.description}</h1>
					<p className="font-bold text-orange-400 mb-4">{product.price}</p>
				</a>
			</div>
		);
	});

	return (
		<div className="flex ml-28 overflow-auto mb-20">
			<div className="grid h-96 ">
				<div>
					<Search brandName="Thương hiệu" />
				</div>
				<div className="mt-36">
					<Search brandName="Loại thương hiệu" />
				</div>
				<div className="mt-36">
					<Search brandName="Giá" />
				</div>
			</div>

			<div className="mx-20 capitalize ">
				<div className="mt-4 flex justify-between">
					<h1 className="text-4xl font-bold">Tất cả sản phẩm</h1>
					<div className="flex">
						<p className="mt-2 mr-1 font-medium">Sắp xếp theo: </p>
						<select className="border-2 rounded-lg  capitalize">
							<option>Sản phẩm nổi bật</option>
							<option>Giá: tăng dần</option>
							<option>Giá: giảm dần</option>
							<option>Tên: A-Z</option>
							<option>Tên: Z-A</option>
							<option>Mới nhất</option>
							<option>Bán chạy nhất</option>
						</select>
					</div>
				</div>
				<div className="flex flex-wrap">{renderProduct}</div>
			</div>
		</div>
	);
}

export default Product;
