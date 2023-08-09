import React from "react";
import styled from "styled-components";
import Place from "../../assets/details/place/local-floras-min.jpg";
import Shelf from "../../assets/details/place/shelf-floras-min.jpg"
import DetailImage from "./DetailImage";
import PrimaryButton from "./PrimaryButton";
import { AiOutlineArrowRight as ArrowRight } from "react-icons/ai";

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2rem auto;
  margin-bottom: 4rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 0.5rem;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LeadingTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const LeadingText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  max-width: 50ch;
  margin-bottom: 1rem;
  color: #015314;
  font-family: Overpass, sans-serif;
  line-height: 1.5rem;
`;

const DetailedText = styled.em`
  font-size: 1rem;
  font-weight: 600;
  color: #0d6823;
  font-style: italic;
  font-family: "Playfair Display", serif;
`;

const SpamText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: Overpass, sans-serif;
  margin-bottom: 0.25rem;
  color: #4f1700;
`;

const Home = () => {
  return (
    <>
      <SectionWrapper>
        <TextContainer>
          <LeadingTitle style={{ color: "#97D6A6", marginTop: "-2.5rem" }}>
            Flora's Bakery
          </LeadingTitle>
          <LeadingTitle style={{ color: "#64B778", marginTop: "-2.5rem" }}>
            Flora's Bakery
          </LeadingTitle>
          <LeadingTitle style={{ color: "#3B9851", marginTop: "-2.5rem" }}>
            Flora's Bakery
          </LeadingTitle>
          <LeadingText>
            Bem-vindo à Flora's Bakery, onde tradição e inovação se entrelaçam
            para criar experiências únicas. Fundada em 2023, somos mais do que
            uma padaria, contamos histórias através de sabores autênticos.
            Localizados em Gramado, nossa equipe de 14 membros fantásticos que
            compartilham o compromisso de elevar a simplicidade à forma de arte.
            Com planos de fidelidade e ofertas exclusivas convidamos você a se
            juntar a nós nessa jornada culinária.{" "}
          </LeadingText>
          <DetailedText>
            Descubra a alegria em cada produto que criamos.
          </DetailedText>
        </TextContainer>
        <DetailImage
          image={Place}
          width="480px"
          height="400px"
          alt="Flora's Bakery Place"
        />
      </SectionWrapper>
      <SectionWrapper>
        <TextContainer>
          <SpamText>Como tudo começou</SpamText>
          <LeadingTitle style={{ color: "#3B9851" }}>
            Nossa História
          </LeadingTitle>
          <LeadingText>
            Fundada em 2023 pela união de famílias através do casamento, a
            Flora's Bakery busca proporcionar conforto e qualidade aos clientes
            com produtos confiáveis da região do Rio Grande do Sul. Nosso
            objetivo é ser a melhor padaria do Brasil, compartilhando não apenas
            produtos, mas sensações e felicidade.
          </LeadingText>
          <PrimaryButton text="Saiba mais" icon={<ArrowRight size={20}/>} action={() => console.log('oi')}/>
        </TextContainer>
        <DetailImage image={Shelf} width="480px" height="400px" alt="Flora's Bakery Place"/>
      </SectionWrapper>
    </>
  );
};
export default Home;
