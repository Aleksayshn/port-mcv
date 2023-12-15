import Box from '../Box/Box';
import { outletMacker } from '../OutletMacker/OutletMacker';
import SubTitle from '../SubTitle/SubTitle';

const InterestsAbout = () => {
    const text = "Passionate about exploring the world through hiking, climbing, and biking, I find joy in the simplicity of life. Yoga and a focus on health are integral parts of my daily routine, fostering a holistic approach to well-being. \r In the dynamic world of technology, I aspire to become the full spectrum of full-stack development, skillfully navigating both front-end and back-end technologies. My ambition is to harness my technical skills to develop impactful, innovative solutions. I see coding not just as lines of text but as a powerful tool to revolutionize the tech landscape."
    const result = outletMacker(text);

    return (
        <Box>
            <SubTitle text={'interest'} />
            {result}
        </Box>
    );
};

export default InterestsAbout;
