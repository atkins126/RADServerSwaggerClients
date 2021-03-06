{-
   EMS API Documentation
   Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps

   OpenAPI spec version: 0.0.0
   

   NOTE: This file is auto generated by the swagger code generator program.
   https://github.com/swagger-api/swagger-codegen.git
   Do not edit this file manually.
-}


module Data.FieldGroupObject exposing (FieldGroupObject, fieldGroupObjectDecoder, fieldGroupObjectEncoder)

import Data.FieldObjectFields exposing (FieldObjectFields, fieldObjectFieldsDecoder, fieldObjectFieldsEncoder)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (decode, optional, required)
import Json.Encode as Encode
import Maybe exposing (map, withDefault)




type alias FieldGroupObject =
    { name : String
    , fields : Maybe (List FieldObjectFields)
    , custom : Maybe Bool
    }


fieldGroupObjectDecoder : Decoder FieldGroupObject
fieldGroupObjectDecoder =
    decode FieldGroupObject
        |> required "name" Decode.string
        |> optional "fields" (Decode.nullable (Decode.list fieldObjectFieldsDecoder)) Nothing
        |> optional "custom" (Decode.nullable Decode.bool) Nothing



fieldGroupObjectEncoder : FieldGroupObject -> Encode.Value
fieldGroupObjectEncoder model =
    Encode.object
        [ ( "name", Encode.string model.name )
        , ( "fields", withDefault Encode.null (map (Encode.list << List.map fieldObjectFieldsEncoder) model.fields) )
        , ( "custom", withDefault Encode.null (map Encode.bool model.custom) )
        ]


