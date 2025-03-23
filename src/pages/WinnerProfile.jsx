import React from "react";
import "../style/winnerProfile.css";
import winner from "../assets/winner.png";
import img from "../assets/image1.png";
import pro from "../assets/pro.png";
import flg from "../assets/text.png";
import flg2 from "../assets/text2.png";

const WinnerProfile = () => {
  return (
    <div className="winner-profile">
      <header>
        <div className=" pt-5">
          <div>
            <h1>Adrijana Husic </h1>{" "}
            <img
              src={flg2}
              alt=""
              className="desk flg2"
              style={{ width: "40p" }}
            />
          </div>

          <div className="flg4">
          <p className="d-flex gap-5 ">
            Certificate Issued: 14/03/2024{" "}
            <img src={flg} alt="" className="mob" />
          </p>
          </div>
          
        </div>

        <div className=" mob">
          <p>
            2023 NobleTechie winner and Director of <br /> Marketing and
            Communications at Portonovi.
          </p>
        </div>

        <div className=" desk d-fle justify-content-betwee flg3">
          <p className="d-flex gap-5">
            Certificate Issued: 14/03/2024{" "}
            <img src={flg} alt="" className="mob" />
          </p>
          <p className="flg3-p">
            2023 NobleTechie winner and Director of <br /> Marketing and
            Communications at Portonovi.
          </p>
        </div>
      </header>
      <section className="profile-content">
        <div className="profile-img">
          <img src={winner} alt="" className="mob" />
          <img src={pro} alt="" className="desk" />
          <p>
            Wilson Dike is an exemplary technology and business leader with an
            outstanding track record of driving digital transformation,
            fostering strategic partnerships, and spearheading innovative sales
            and market expansion initiatives. His career spans multiple global
            organizations, where he has consistently delivered exceptional
            results, making significant contributions to the fintech,
            e-commerce, enterprise software, and SaaS industries.
          </p>
        </div>
        <h2> 1. Leadership and Impact in Digital Transformation</h2>
        <p>
          As the Country Manager at Siemens UK, Wilson plays a pivotal role in
          leading digital transformation efforts, enhancing customer discovery
          strategies, and developing innovative approaches to enterprise
          software sales. His ability to foster strategic partnerships and
          execute commercial negotiations effectively highlights his expertise
          in navigating complex business environments.
        </p>
        <h2> 2. Significant Contributions to Fintech and E-commerce</h2>
        <p>
          During his tenure at RedCloud as the Sales Director for Enterprise
          Accounts (SaaS, e-Commerce, and FinTech), Wilson drove business
          expansion across West Africa. Notable achievements include: <br />
          ● Managing an annual trade volume of $20 million and overseeing FMCG
          accounts with a gross merchandise value exceeding $50 million. <br />
          ● Leading the nationwide adoption of the Red101 Marketplace app in
          Nigeria, a crucial initiative for digital trade facilitation. <br />
          ● Implementing high-impact sales and marketing strategies that
          penetrated new markets, strengthening corporate standing and driving
          revenue growth. <br />
          ● Successfully closing RedCloud’s first B2B trade digitalization
          contract in Nigeria and Sub-Saharan Africa, valued at $6.5 million in
          yearly trading volume.
        </p>
        <h2> 3. Excellence in Sales and Market Expansion</h2>
        <p>
          Wilson's ability to execute go-to-market strategies is evident from
          his tenure at Group8 Africa and Sage. His key contributions include:{" "}
          <br />
          ● Launching and growing five product portfolios, achieving over 1
          million downloads and digital engagements. <br />
          ● Driving $1.5 million in subscription and advertisement revenue
          through strategic sales initiatives. <br />
          ● Securing a $500,000 ERP SIFMIS deal in the public sector while at
          Sage, demonstrating his expertise in enterprise software sales.
        </p>

        <h2>4. Strategic and Consultative Sales Expertise</h2>
        <p>
          Wilson has a proven ability to build and maintain high-value
          relationships, negotiate large-scale commercial deals, and drive
          enterprise software adoption. His experience across multiple
          organizations has honed his skills in: <br />
          ● Strategic planning and account management <br />
          ● International sales and business expansion <br />
          ● Solution selling and technology sales <br />
          ● Leadership and team development
        </p>

        <h2>5. Mentorship, Influence, and Industry Contributions</h2>
        <p>
          Beyond his direct professional achievements, Wilson has played a
          crucial role in mentoring sales and marketing teams, ensuring their
          growth and peak performance. His leadership in restructuring sales
          hierarchies has led to increased efficiency and revenue optimization.
        </p>

        <h2>Overall Conclusion and Recommendation</h2>
        <p>
          Wilson Dike exemplifies the qualities of a NobleTechie through his
          leadership in technology-driven business expansion, strategic
          innovation, and commitment to digital transformation. His outstanding
          contributions to fintech, e-commerce, and enterprise software sales
          have left a lasting impact on the industry. Recognizing Wilson Dike as
          a NobleTechie is a well-deserved acknowledgment of his dedication,
          expertise, and transformational leadership in the global tech
          ecosystem.
        </p>
      </section>

      <div className="profile-img2 ">
        <img src={img} alt="" />
        <div className="profile-text">
          <h2>Thony Da Silva Romero</h2>
          <p className="ps-0">NobleTechie Judge</p>
        </div>
      </div>
    </div>
  );
};

export default WinnerProfile;
