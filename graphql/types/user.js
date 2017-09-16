import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLEnumType,
    GraphQLBoolean
} from 'graphql';

export const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        role: {
            type: GraphQLString
        },
        flag_active: {
            type: GraphQLBoolean
        }
    })
})



export const userInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: () => ({
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        role: {
            type: new GraphQLEnumType({
                name: 'Role',
                values: {
                    ADMIN: { value: "ADMIN" },
                    MEMBER: { value: "MEMBER" }
                }
            })
        }
    })
})
