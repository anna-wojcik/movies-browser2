import { Span, Star, VoteParagrapgh } from "./styled";
import starIcon from "./star.svg";

export const Vote = ({ vote_average, vote_count }) => {
    const roundVoteAverage = vote => Math.round(vote*100) / 100;

    return (
        <VoteParagrapgh>
            <Star src={starIcon} alt="Star"></Star>
            {roundVoteAverage(vote_average)}
            <Span $skale>/ 10</Span>
            <Span>{vote_count} votes</Span>
        </VoteParagrapgh>
    )
};

export default Vote;