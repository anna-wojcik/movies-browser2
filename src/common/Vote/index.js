import { Span, Star, VoteParagrapgh } from "./styled";
import starIcon from "./star.svg";

export const Vote = ({ vote_average, vote_count, inTileMovie, inBackdrop }) => {
    const roundVoteAverage = vote => vote.toFixed(1);

    return (
        <VoteParagrapgh $inTileMovie={inTileMovie} $inBackdrop={inBackdrop} >
            {vote_average && vote_count
                ? (
                    <>
                        <Star 
                            $inBackdrop={inBackdrop} 
                            src={starIcon} 
                            alt="Star" 
                        />
                        {roundVoteAverage(vote_average)}
                        {!inTileMovie &&
                            <Span
                                $inTileMovie={inTileMovie}
                                $skale
                                $inBackdrop={inBackdrop}
                            >/ 10
                            </Span>}
                        <Span
                            $inTileMovie={inTileMovie}
                            $inBackdrop={inBackdrop}
                        >{vote_count} votes
                        </Span>
                    </>
                )
                : <Span 
                    $inTileMovie={inTileMovie}
                    $inBackdrop={inBackdrop}    
                >No votes yet</Span>
            }
        </VoteParagrapgh>
    )
};

export default Vote;