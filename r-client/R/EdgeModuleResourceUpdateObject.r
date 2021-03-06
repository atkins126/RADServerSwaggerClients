# EMS API Documentation
#
# Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps
#
# OpenAPI spec version: 0.0.0
# 
# Generated by: https://github.com/swagger-api/swagger-codegen.git


#' EdgeModuleResourceUpdateObject Class
#'
#' @field resourcename 
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
EdgeModuleResourceUpdateObject <- R6::R6Class(
  'EdgeModuleResourceUpdateObject',
  public = list(
    `resourcename` = NULL,
    initialize = function(`resourcename`){
      if (!missing(`resourcename`)) {
        stopifnot(is.character(`resourcename`), length(`resourcename`) == 1)
        self$`resourcename` <- `resourcename`
      }
    },
    toJSON = function() {
      EdgeModuleResourceUpdateObjectObject <- list()
      if (!is.null(self$`resourcename`)) {
        EdgeModuleResourceUpdateObjectObject[['resourcename']] <- self$`resourcename`
      }

      EdgeModuleResourceUpdateObjectObject
    },
    fromJSON = function(EdgeModuleResourceUpdateObjectJson) {
      EdgeModuleResourceUpdateObjectObject <- jsonlite::fromJSON(EdgeModuleResourceUpdateObjectJson)
      if (!is.null(EdgeModuleResourceUpdateObjectObject$`resourcename`)) {
        self$`resourcename` <- EdgeModuleResourceUpdateObjectObject$`resourcename`
      }
    },
    toJSONString = function() {
       sprintf(
        '{
           "resourcename": %s
        }',
        self$`resourcename`
      )
    },
    fromJSONString = function(EdgeModuleResourceUpdateObjectJson) {
      EdgeModuleResourceUpdateObjectObject <- jsonlite::fromJSON(EdgeModuleResourceUpdateObjectJson)
      self$`resourcename` <- EdgeModuleResourceUpdateObjectObject$`resourcename`
    }
  )
)
