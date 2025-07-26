import { Span, Star, VoteParagrapgh } from "./styled";
import starIcon from "./star.svg";

export const Vote = ({ vote_average, vote_count, inTileMovie }) => {
    const roundVoteAverage = vote => vote.toFixed(1);
    
    return (
        <VoteParagrapgh $inTileMovie={inTileMovie}>
            {vote_average && vote_count
                ? (
                    <>
                        <Star src={starIcon} alt="Star"></Star>
                        {roundVoteAverage(vote_average)}
                        {!inTileMovie && <Span $inTileMovie={inTileMovie} $skale>/ 10</Span>}
                        <Span $inTileMovie={inTileMovie}>{vote_count} votes</Span>
                    </>
                )
                : <Span $inTileMovie={inTileMovie}>No votes yet</Span>
            }
        </VoteParagrapgh>
    )
};

export default Vote;