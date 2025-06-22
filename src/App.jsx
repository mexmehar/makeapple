import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

     <Section
  title="iPhone 15"
  subtitle="New camera. New design. New era."
  bgColor="bg-gray-100"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneWVJUl6LyCeEkHhq4uaBwBAKciRFZ_MQwQ&s"
/>

<Section
  title="MacBook Air"
  subtitle="Supercharged by M2"
  bgColor="bg-white"
  textColor="text-gray-800"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZDxfIH0kV116bo66fmxW6jvPXWtSFnG6Ww&s"
/>

<Section
  title="Apple Watch"
  subtitle="A healthy leap ahead."
  bgColor="bg-black"
  textColor="text-white"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0rjS1A_WFCJGoRobqzYEVaA2Bqwlbj4lUQ&s"
/>

      <Footer />
    </div>
  );
}

export default App;
