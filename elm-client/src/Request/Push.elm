{-
   EMS API Documentation
   Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps

   OpenAPI spec version: 0.0.0
   

   NOTE: This file is auto generated by the swagger code generator program.
   https://github.com/swagger-api/swagger-codegen.git
   Do not edit this file manually.
-}


module Request.Push exposing (send)

import Data.PushObject exposing (PushObject, pushObjectEncoder)
import Http
import Json.Decode as Decode


basePath : String
basePath =
    "http://localhost:8080"


{-
   Used to send a push notification message to a registered device
-}
send : PushObject -> Http.Request ()
send model =
    { method = "POST"
    , url = basePath ++ "/push"
    , headers = []
    , body = Http.jsonBody <| pushObjectEncoder model
    , expect = Http.expectStringResponse (\_ -> Ok ())
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


