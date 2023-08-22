import React from "react";

export const ExperienceCard = () => {
	let linksArr = [
		"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433",
		"https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
		,
		"https://cdn-icons-png.flaticon.com/512/174/174854.png",
		,
		"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
		,
		"https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
		,
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
		,
		"https://e7.pngegg.com/pngimages/525/356/png-clipart-logo-drupal-content-management-system-gnu-general-public-license-logo-wordpress-text-logo.png",
		,
		"https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
		,
	];

	const imageSkill = linksArr.map((imgLink) => (
		<img
			key={imgLink?.length}
			className="  h-10 w-10 rounded-full"
			src={imgLink}
			alt=""
		/>
	));

	return (
		<div>
			<article className=" flex flex-col justify-center text-center rounded-lg items-center space-y-7 flex-shrink-0 w-[200px]  md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 md:opacity-40 transition-opacity duration-200 ease-in-out cursor-pointer overflow-hidden">
				<img
					className=" w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5pkT98OeckFAW0aSouxiv_a4bHy0Xf0RA5-SpMF_Ipms8RauKEBsNGPYkm91MScrCfxY&usqp=CAU"
					alt=""
				/>
				<div className=" px-0 md:px-10">
					<h4 className=" text-4xl font-light">non-commercial</h4>
					<p className="font-bold text-2xl mt-1">Experience</p>
					<div className="flex flex-wrap gap-2 justify-center space-x-2 my-2 [&>*]:object-cover  ">
						{imageSkill}
					</div>
					<p className="flex flex-col uppercase py-5 text-gray-300">
						<span>Started work...</span>
						<span>Ended...</span>
					</p>
				</div>
			</article>
		</div>
	);
};
