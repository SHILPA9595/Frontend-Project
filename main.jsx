import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Two from "./two.jsx";
import Footer from "./Footer.jsx";
import Cardd from "./Cardd.jsx";
import "./main.css";
// import ContactUs from "./ContactUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Card name={"shilpa"} position={"hr"} /> */}
    <Two />
 {/* <ContactUs/> */}
    <h1 id="mainmenu">Special-Menu</h1>
    <div id="cardContainer">
      <Cardd
        src="https://img.freepik.com/premium-photo/rajma-chawal-plate-front-view-featuring-kidney-beans-curry-rice-concept-food-styling-indian-cuisine-rajma-chawal-food-photography-front-view-shot_864588-155711.jpg"
        dishName="Rajhma-Chawal"
        cost="₹200"
      />
      <Cardd
        src=" https://www.modernhoney.com/wp-content/uploads/2023/05/Fruit-Salad-10.jpg"
        dishName="Fruit-Salad"
        cost="₹180"
      />
      <Cardd
        src="https://spicecravings.com/wp-content/uploads/2022/01/Chilli-Paneer-Featured-2.jpg"
        dishName="Paneer"
        cost="₹380"
      />
      <Cardd
        src="https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/08/Pudina-Lachha-Paratha-H1.jpg?fit=600%2C900&ssl=1"
        dishName="Lacha-Parantha"
        cost="₹220"
      />
      <Cardd
        src="https://www.whiskaffair.com/wp-content/uploads/2014/07/Palak-Paneer-2-1.jpg"
        dishName="Palak-Paneer"
        cost="₹320"
      />

      <Cardd
        src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JCchMBtWmi9LlQO0otfBUBQY4O7ykyHssg&s"
        dishName="Dal-Makhni"
        cost="₹280"
      />
      <Cardd
        src="https://media.istockphoto.com/id/1205762531/photo/stuffed-paratha.jpg?s=612x612&w=0&k=20&c=vztUKV1MhN3kRvaBigoUeDifuy0PG85eB0gTKsfn0Bo="
        dishName="Parantha"
        cost="₹120"
      />
      <Cardd
        src="https://i.ytimg.com/vi/KOAVogcwR-U/maxresdefault.jpg"
        dishName="Veg-Champ"
        cost="₹240"
      />
      <Cardd
        src="https://rakskitchen.net/wp-content/uploads/2013/11/10867983783_854a7fec8f_o.jpg"
        dishName="Veg-Thali"
        cost="₹280"
      />
      <Cardd
        src="https://ministryofcurry.com/wp-content/uploads/2020/07/paneer-butter-masala_-2.jpg"
        dishName="Butter-Paneer"
        cost="₹380"
      />

      <Cardd
        src="https://spicecravings.com/wp-content/uploads/2024/03/Makki-Roti-Featured-2.jpg"
        dishName="Makki-Roti"
        cost="₹120"
      />
      <Cardd
        src="https://i0.wp.com/indischwindisch.com/wp-content/uploads/2021/05/Simple-Everyday-meals-cover-3.jpg?resize=1000%2C667&ssl=1"
        dishName="Masoor-Dal"
        cost="₹180"
      />
      <Cardd
        src="https://www.tasteofhome.com/wp-content/uploads/2024/01/Dads-Greek-Salad_TOHAM25_189184_P2_MD_03_01_2b.jpg?fit=700%2C1024"
        dishName="Veg-Salad"
        cost="₹220"
      />
      <Cardd
        src="https://cookingwithpree.com/wp-content/uploads/2018/04/Sprouts-stir-fry-500x375.jpg"
        dishName="Sprouts"
        cost="₹320"
      />
      <Cardd
        src="https://punjabibyflavor.com/cdn/shop/files/KadhiChawal_4075afec-9fb0-42ad-866a-76ceb2c0cc21.jpg?v=1709086127 "
        dishName="Kadi-Chawal"
        cost="₹210"
      />
    </div>

    <h1 id="secondmenu">Chinese</h1>
    <div id="secondContainer">
      <Cardd
        src="https://plantyou.com/wp-content/uploads/2023/08/DSC09141-scaled.jpg"
        dishName="Atta-Noodles"
        cost="₹180"
      />
      <Cardd
        src="https://cdn.uengage.io/uploads/48101/image-3617-1716396573.jpg"
        dishName="Chilly-Paneer"
        cost="₹380"
      />
      <Cardd
        src="https://moribyan.com/wp-content/uploads/2023/11/IMG_5468.jpg"
        dishName="Fries"
        cost="₹260"
      />
      <Cardd
        src="https://static.vecteezy.com/system/resources/thumbnails/049/368/233/small_2x/tibetian-dumplings-momo-with-chicken-meat-or-vegetables-photo.jpg"
        dishName="Momos"
        cost="₹320"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9aE12IVjpVX4US0bjBVWUL808JsvpDW5Mg&s"
        dishName="Chilly-Momos"
        cost="₹390"
      />

      <Cardd
        src="https://vps029.manageserver.in/test/wp-content/uploads/2023/12/Gochujang-Noodles-Recipe-SQ.jpg"
        dishName="Noodles"
        cost="₹315"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuhA1h2ezBOr9CSV_3eWjH0KkOPd0beEg5TPR6KwL6B5r_K-7Ga-pqDFwMDkC_4oouSg&usqp=CAU"
        dishName="2x-Spicy"
        cost="₹400"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPB0SshjQzi37NckUqup-HIv1ULwgFFmJExg&s"
        dishName="Fried-Rice"
        cost="₹310"
      />
      <Cardd
        src="https://hips.hearstapps.com/hmg-prod/images/korean-corn-dogs-1-1666842213.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
        dishName="Hot-Dog"
        cost="₹130"
      />
      <Cardd
        src="https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli-potato-recipe.jpg"
        dishName="Chilly Potato"
        cost="₹200"
      />

      <Cardd
        src="https://i0.wp.com/foodtrails25.com/wp-content/uploads/2019/09/How-to-make-Thukpa-Noodle-Soup.jpg?fit=1200%2C1200&ssl=1"
        dishName="Thupka"
        cost="₹230"
      />
      <Cardd
        src="https://www.whiskaffair.com/wp-content/uploads/2020/02/Chilli-Garlic-Noodles-2-3.jpg"
        dishName="Garlic-Noodles"
        cost="₹250"
      />
      <Cardd
        src="https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora.b-cdn.net%2FScreenshot_2024_10_01_140619_572a1d5d13.jpg&w=3840&q=75"
        dishName="Manchurian"
        cost="₹290"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Mu1nrkYOO2CtZeZeTZlDFXNkXB9R2AkSGg&s"
        dishName="Fried-Momos"
        cost="₹190"
      />
      <Cardd
        src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-03/Easiest-Pizza_22-2_11.jpg?itok=MlGWxXsI"
        dishName="Pizza"
        cost="₹370"
      />
    </div>

    <h1 id="thirdmenu">Sweets and Drinks</h1>
    <div id="thirdContainer">
      <Cardd
        src="https://sinfullyspicy.com/wp-content/uploads/2011/07/1-1.jpg"
        dishName="Gulab-Jamun"
        cost="₹270"
      />
      <Cardd
        src="https://eclipsefoods.com/wp-content/uploads/bb-plugin/cache/pexels-jeshoots-36311-landscape-4d1ab732c2fbc6a80c2c97595892eb97-4vkz3bpjmn2u.jpg"
        dishName="Ice-Cream"
        cost="₹245"
      />
      <Cardd
        src="https://static.toiimg.com/thumb/53842591.cms?imgsize=1077535&width=800&height=800"
        dishName="Cold-Coffee"
        cost="₹280"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Y36L6TGSvgSze-qED539PXGLJMabXrWVGQ&s"
        dishName="Croissant"
        cost="₹240"
      />
      <Cardd
        src="https://thebigmansworld.com/wp-content/uploads/2024/09/protein-shakes.jpg"
        dishName="Shakes"
        cost="₹250"
      />

      <Cardd
        src="https://media.cnn.com/api/v1/images/stellar/prod/181127105254-08-50-sweets-travel-donuts.jpg?q=w_1110,c_fill"
        dishName="Dougnut"
        cost="₹250"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTXngA8gGFRl80GcfN9lRUtHPRTSDdAwIOg&s"
        dishName="Barfi"
        cost="₹850"
      />
      <Cardd
        src="https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2013/10/surya-chandra-001_thumb1.jpg?resize=500%2C641&ssl=1"
        dishName="Gujjia"
        cost="₹600"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnyEkLJJ1Ct0R4VOVFIb1BHJPgAfs61aAaA&s"
        dishName="Mootichoor"
        cost="₹480"
      />
      <Cardd
        src="https://www.jiomart.com/images/product/original/rvsd6ox7u7/btw-rasgulla-1-kg-product-images-orvsd6ox7u7-p605609584-1-202310231622.png?im=Resize=(420,420)"
        dishName="Rasgulla"
        cost="₹550"
      />

      <Cardd
        src="https://cpimg.tistatic.com/08981467/b/4/Milk-Cake.jpg"
        dishName="Milk-Cake"
        cost="₹650"
      />
      <Cardd
        src="https://pahalwans.com/wp-content/uploads/2017/11/dhoda-burfi-pahalwans-sweets-jammu-2.jpg"
        dishName="Doda-Barfi"
        cost="₹750"
      />
      <Cardd
        src="https://media.istockphoto.com/id/1159362325/photo/bread-pakora.jpg?s=612x612&w=0&k=20&c=93uILcInCMXroXgjEJYXNeUzWh5NASSrEnylAgW7hcs="
        dishName="Jalebi"
        cost="₹350"
      />
      <Cardd
        src="https://vps029.manageserver.in/test/wp-content/uploads/2024/04/Hot-Coffee.png"
        dishName="Hot-Coffee"
        cost="₹210"
      />
      <Cardd
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3eftM-d9tbJ0c44HJvtXxuQRDfrqss7ZoA&s"
        dishName="Soft-Drinks"
        cost="₹99"
      />
    </div>

    {/* FOOTER COMPONENT. */}
    
    <Footer />

    {/* <Ek/> */}
  </StrictMode>
);