import Input from "../../components/Input";
import logo from "../../resourses/images/logo1.svg";

function Header() {
	const nav = [
		"Trang chủ",
		"Sản phẩm",
		"Thương hiệu",
		"Kiến thức thể thao",
		"Tin tức",
	];

	const renderNav = nav.map((item) => {
		return (
			<li className="px-10 text-white text-lg">
				<a href={item}>{item.toUpperCase()}</a>
			</li>
		);
	});
	return (
		<div>
			<div className="flex h-20  w-screen  justify-around py-4">
				<div>
					<a href="#">
						<img src={logo} width="250" />
					</a>
				</div>
				<div className="relative">
					<Input
						className="  h-12 px-3 py-2 w-600-px outline-none border-solid border-2 "
						placeholder="Tìm sản phẩm Mass, Whey, Thương hiệu mong muốn"
					/>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 absolute right-5 top-3 text-gray-600 cursor-pointer"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
				<div className="font-medium">
					<p className="text-lg">Giờ mở cửa (08:00 - 17:30 chiều)</p>
					<a
						href="#"
						className="flex justify-center font-semibold text-2xl hover:scale-125"
					>
						<div className="rounded-full bg-orange-300 w-8 h-8 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-1 mt-1 text-white "
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</div>
						<span>(028) 22.00.2222</span>
					</a>
				</div>
			</div>
			<header className="bg-amber-400 h-14 py-3 px-24">
				<ul className="flex">{renderNav}</ul>
			</header>
		</div>
	);
}

export default Header;
