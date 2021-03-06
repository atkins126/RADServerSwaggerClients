/* 
 * EMS API Documentation
 *
 * Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps
 *
 * OpenAPI spec version: 0.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


#[allow(unused_imports)]
use serde_json::Value;

#[derive(Debug, Serialize, Deserialize)]
pub struct EdgeModuleResourceAddObject {
  #[serde(rename = "resourcename")]
  resourcename: String
}

impl EdgeModuleResourceAddObject {
  pub fn new(resourcename: String) -> EdgeModuleResourceAddObject {
    EdgeModuleResourceAddObject {
      resourcename: resourcename
    }
  }

  pub fn set_resourcename(&mut self, resourcename: String) {
    self.resourcename = resourcename;
  }

  pub fn with_resourcename(mut self, resourcename: String) -> EdgeModuleResourceAddObject {
    self.resourcename = resourcename;
    self
  }

  pub fn resourcename(&self) -> &String {
    &self.resourcename
  }


}



