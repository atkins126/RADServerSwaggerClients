# EMS API Documentation
#
# Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps
#
# OpenAPI spec version: 0.0.0
# 
# Generated by: https://github.com/swagger-api/swagger-codegen.git


#' UserCredentialsObject Class
#'
#' @field username 
#' @field password 
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
UserCredentialsObject <- R6::R6Class(
  'UserCredentialsObject',
  public = list(
    `username` = NULL,
    `password` = NULL,
    initialize = function(`username`, `password`){
      if (!missing(`username`)) {
        stopifnot(is.character(`username`), length(`username`) == 1)
        self$`username` <- `username`
      }
      if (!missing(`password`)) {
        stopifnot(is.character(`password`), length(`password`) == 1)
        self$`password` <- `password`
      }
    },
    toJSON = function() {
      UserCredentialsObjectObject <- list()
      if (!is.null(self$`username`)) {
        UserCredentialsObjectObject[['username']] <- self$`username`
      }
      if (!is.null(self$`password`)) {
        UserCredentialsObjectObject[['password']] <- self$`password`
      }

      UserCredentialsObjectObject
    },
    fromJSON = function(UserCredentialsObjectJson) {
      UserCredentialsObjectObject <- jsonlite::fromJSON(UserCredentialsObjectJson)
      if (!is.null(UserCredentialsObjectObject$`username`)) {
        self$`username` <- UserCredentialsObjectObject$`username`
      }
      if (!is.null(UserCredentialsObjectObject$`password`)) {
        self$`password` <- UserCredentialsObjectObject$`password`
      }
    },
    toJSONString = function() {
       sprintf(
        '{
           "username": %s,
           "password": %s
        }',
        self$`username`,
        self$`password`
      )
    },
    fromJSONString = function(UserCredentialsObjectJson) {
      UserCredentialsObjectObject <- jsonlite::fromJSON(UserCredentialsObjectJson)
      self$`username` <- UserCredentialsObjectObject$`username`
      self$`password` <- UserCredentialsObjectObject$`password`
    }
  )
)
