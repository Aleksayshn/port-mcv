import Box from "../Box/Box";
import { outletMacker } from "../OutletMacker/OutletMacker";
import SubTitle from "../SubTitle/SubTitle";

const Bio = () => {
    const text =
        "Hello! I am dedicated to mastering Full-Stack Engineering, currently based in Odesa, and open to opportunities that may require relocation. \r With one year of programming experience, I have gained practical knowledge through educational pet projects, participation in an open-source commerce project, and involvement in a start-up project using AI. These experiences have allowed me to hone my skills in teamwork and project execution. My ultimate goal is to expand my skill set as a full-stack developer while continuing to contribute to the community. \r In my previous role, I accumulated over 10 years of government service as the head of the information security sector, requiring a great deal of responsibility and executive discipline.";

    const result = outletMacker(text);

    return (
        <Box>
            <SubTitle text={'personal-info'} />
            {result}
        </Box>
    );
};

export default Bio;