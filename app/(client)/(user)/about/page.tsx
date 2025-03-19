import Container from "@/components/Container";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="max-w-6xl lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">About Zylera</h1>
      <p className="mb-4">
        Zylera is a fashion brand that offers a wide range of clothing items for
        men and women. Our mission is to provide high-quality, affordable,
        fashionable clothing that is accessible to everyone.
      </p>
      <p className="mb-4">
        We believe that fashion should be fun and accessible to everyone,
        regardless of age, size, or style. That&apos;s why we offer a wide range of
        clothing items, from casual wear to formal wear, in a variety of sizes
        and styles.
      </p>
      <p>
        At Zylera, we&apos;re committed to providing our customers with the best
        possible shopping experience. We strive to provide fast shipping, easy
        returns, and excellent customer service.
      </p>
    </Container>
  );
};

export default AboutPage;