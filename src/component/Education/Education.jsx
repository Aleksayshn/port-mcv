import Box from "../Box/Box";
import SubTitle from "../SubTitle/SubTitle";
import { EduContainer, EduBox, Title, Description, DateTime, DescriptionSpan } from "./Education.styled";
import EduTechSkill from "../EduTechSkill/EduTechSkill";
const Education = () => {

    return (<>
        <Box size={2}>
            <SubTitle text={'education'} />
            <EduContainer>
                <EduBox>
                    <Title>School GoIT (Kyiv)</Title>
                    <Description><DescriptionSpan>Scholarship Programm Fullstack Web Developer</DescriptionSpan></Description>
                    <DateTime>2022-2023</DateTime>
                </EduBox>
                <EduBox>
                    <Title>Sigma Software University</Title>
                    <Description><DescriptionSpan>Scholarship Programm Frontend Developer</DescriptionSpan></Description>
                    <DateTime>2022-2023</DateTime>
                </EduBox>
                <EduBox>
                    <Title>University of the State Fiscal Service</Title>
                    <Description>master's degree of Law</Description>
                    <DateTime>2004-2009</DateTime>
                </EduBox>
            </EduContainer>
        </Box>
        <Box size={2}>
            <EduTechSkill />
        </Box>
    </>)
};

export default Education;