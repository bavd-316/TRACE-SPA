import React from 'react';
import {Query} from "react-apollo";
import { listTerms } from "../../graphql/queries";
import gql from 'graphql-tag';
import Term from './term';

class DisplayTerms extends React.Component {

    render() {
        return (
            <div className="terms">
                <Query query={gql( listTerms )}>
                    {({ loading, data, error }) => {

                        if (loading) return <p>loading...</p>
                        if (error) return <p>{error.message}</p>

                        return <Term data={data}/>
                    }}
                </Query>
            </div>
        )
    }
}

export default DisplayTerms;