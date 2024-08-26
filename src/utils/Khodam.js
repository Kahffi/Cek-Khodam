import naga_buncit from "../assets/images/naga_buncit.jpeg";
import anak_krakatau from "../assets/images/anak_krakatau.jpg";
import badak_jawa from "../assets/images/badak_jawa.jpg";
import beruang_hitam from "../assets/images/beruang_hitam.jpeg";
import gajah_afrika from "../assets/images/gajah_afrika.jpeg";
import harimau_sumatera from "./../assets/images/harimau_sumatera.jpg";
import khodam_yatim from "./../assets/images/khodam_yatim.jpeg";
import macan_tutul from "./../assets/images/macan_tutul.jpeg";
import pisang_ambon from "./../assets/images/pisang_ambon.jpeg";
import raja_jawa from "./../assets/images/raja_jawa.jpeg";
import sapu_lidi from "./../assets/images/sapu_lidi.jpg";
import sasuke_uchiha from "./../assets/images/sasuke_uchiha.jpg";
import tisu_kering from "./../assets/images/tisu_kering.jpeg";
import tumbler_corkcicle from "./../assets/images/tumbler_corkcicle.jpeg";
import upil_banteng from "./../assets/images/upil_banteng.jpg";
// import  from "";
// import  from "";
// import  from "";
// import  from "";

const KHODAMS = [
	{
		name: "Naga Buncit",
		description:
			"Naga Buncit dikenal karena kemampuannya memberikan perlindungan yang kuat kepada pemiliknya, sambil menarik rezeki dan kemakmuran dalam kehidupan mereka. Meskipun penampilannya yang gemuk dan lucu bisa menipu, Naga Buncit memiliki kekuatan fisik dan spiritual yang luar biasa, serta kemampuan untuk membawa ketenangan dan kebahagiaan, menciptakan lingkungan yang penuh dengan energi positif.",
		rarity: 3,
		image: naga_buncit,
	},
	{
		name: "Sapu Lidi",
		description:
			"Sapu Lidi memiliki kemampuan untuk membersihkan energi negatif dan pengaruh buruk dari sekitarnya. Seperti fungsi sapu yang digunakan untuk membersihkan kotoran, Sapu Lidi juga diyakini mampu menyapu bersih gangguan spiritual atau kutukan yang mengancam pemiliknya. Khodam ini juga bisa membantu mengatur dan merapikan berbagai aspek kehidupan, menjadikan lingkungan lebih harmonis dan tertata. Selain itu, Sapu Lidi sering diasosiasikan dengan kemampuan untuk mengusir makhluk halus yang berniat jahat.",
		rarity: 3,
		image: sapu_lidi,
	},
	{
		name: "Upil Banteng ",
		description:
			"Upil Banteng mewakili kekuatan dan ketahanan dalam menghadapi hal-hal kecil yang menjengkelkan. Meskipun terlihat sepele, ia memiliki kemampuan untuk melindungi pemiliknya dari gangguan kecil yang dapat tumbuh menjadi masalah besar, mencerminkan sikap tak kenal takut seperti banteng.",
		rarity: 4,
		image: upil_banteng,
	},
	{
		name: "Tisu Kering",
		description:
			"Tisu Kering dikenal dengan kemampuannya untuk menyerap dan menghapus kesedihan, serta membersihkan emosi negatif. Seperti fungsi tisu, khodam ini memberikan kenyamanan dan ketenangan, membantu pemiliknya untuk bangkit dari kesulitan emosional dan menemukan kedamaian batin.",
		rarity: 5,
		image: tisu_kering,
	},
	{
		name: "Macan Sumatera",
		description:
			"Macan Sumatera melambangkan kekuatan, kecepatan, dan kecerdikan. Khodam ini dikenal sebagai penjaga yang tangguh, mampu melindungi pemiliknya dengan kekuatan dan ketepatan gerakan, serta menghadapi ancaman dengan keberanian dan strategi yang bijaksana.",
		rarity: 1,
		image: harimau_sumatera,
	},
	{
		name: "Badak Jawa",
		description:
			"Badak Jawa melambangkan ketahanan dan kekuatan fisik. Dikenal karena kulitnya yang tebal dan kekuatannya yang besar, Badak Jawa memberikan perlindungan yang kuat kepada pemiliknya, membantu menghadapi tantangan besar dan menjaga keamanan dari segala ancaman.",
		rarity: 4,
		image: badak_jawa,
	},
	{
		name: "Anak Krakatau",
		description:
			"Anak Krakatau melambangkakn energi destruktif yang dahsyat, tetapi juga potensi untuk pembaruan. Ia memiliki kemampuan untuk menghancurkan hambatan atau situasi yang stagnan, sekaligus membantu pemiliknya memulai kembali dengan energi yang segar dan penuh semangat.",
		rarity: 1,
		image: anak_krakatau,
	},
	{
		name: "Tumbler Corkcicle",
		description:
			"Tumbler Corkcicle memiliki kemampuan untuk menjaga keseimbangan dan stabilitas dalam kondisi apa pun. Seperti fungsi tumbler, ia menjaga kesejukan atau kehangatan situasi, membantu pemiliknya untuk tetap tenang dan fokus dalam berbagai tantangan hidup.",
		rarity: 5,
		image: tumbler_corkcicle,
	},
	{
		name: "Sasuke Uchiha",
		description:
			"Sasuke Uchiha melambangkan kekuatan, kecerdikan, dan kemampuan dalam menghadapi tantangan besar. Ia dikenal karena keahliannya dalam bertarung dan kemampuan ilusi, memberikan pemiliknya keunggulan dalam situasi sulit serta kekuatan mental dan fisik yang luar biasa.",
		rarity: 2,
		image: sasuke_uchiha,
	},
	{
		name: "Macan Tutul",
		description:
			"Macan Tutul melambangkan kelincahan, kecepatan, dan kemampuan untuk bergerak tanpa terdeteksi. Khodam ini memberikan kemampuan untuk bertindak cepat dan efektif dalam menghadapi masalah, serta melindungi pemiliknya dengan cara yang tenang namun mematikan.",
		rarity: 1,
		image: macan_tutul,
	},
	{
		name: "Gajah Afrika",
		description:
			"Gajah Afrika mewakili kekuatan, kebijaksanaan, dan ingatan yang kuat. Khodam ini memberikan perlindungan yang kokoh dan stabil kepada pemiliknya, serta membantu dalam menjaga keseimbangan dan harmoni dalam kehidupan, dengan keberanian yang besar.",
		rarity: 1,
		image: gajah_afrika,
	},
	{
		name: "Pisang Ambon",
		description:
			"Pisang Ambon melambangkan keberuntungan dan kemakmuran. Nama ini mengisyaratkan kemampuannya untuk membawa rezeki dan kebahagiaan dalam kehidupan pemiliknya, serta memberikan energi positif yang memudahkan pencapaian tujuan. Khodam ini juga bisa membantu dalam meningkatkan kreativitas dan memberikan rasa nyaman serta kepuasan dalam kehidupan sehari-hari.",
		rarity: 3,
		image: pisang_ambon,
	},
	{
		name: "Beruang Hitam",
		description:
			"Beruang Hitam melambangkan kekuatan, ketahanan, dan kemampuan bertahan dalam kondisi sulit. Ia dikenal sebagai pelindung yang kuat, memberikan keberanian dan keamanan kepada pemiliknya, serta membantu mengatasi ketakutan atau ancaman yang nyata.",
		rarity: 3,
		image: beruang_hitam,
	},
	{
		name: "Raja Jawa",
		description:
			"Raja Jawa melambangkan kebijaksanaan, otoritas, dan kepemimpinan. Khodam ini memiliki kekuatan untuk memberikan wibawa dan keberanian dalam memimpin, serta melindungi pemiliknya dengan kebijaksanaan seorang raja, menciptakan pengaruh yang kuat di sekitarnya.",
		rarity: 1,
		image: raja_jawa,
	},
	{
		name: "Khodam Yatim",
		description:
			"Khodam yatim melambangkan ketabahan, ketangguhan, dan keuletan dalam menjalani kehidupan.",
		rarity: 2,
		image: khodam_yatim,
	},
];

export default KHODAMS;
