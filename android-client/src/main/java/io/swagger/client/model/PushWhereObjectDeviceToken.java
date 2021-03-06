/**
 * EMS API Documentation
 * Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.model;

import java.util.*;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

/**
 * $in
 **/
@ApiModel(description = "$in")
public class PushWhereObjectDeviceToken {
  
  @SerializedName("$in")
  private List<String> in = null;

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public List<String> getIn() {
    return in;
  }
  public void setIn(List<String> in) {
    this.in = in;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PushWhereObjectDeviceToken pushWhereObjectDeviceToken = (PushWhereObjectDeviceToken) o;
    return (this.in == null ? pushWhereObjectDeviceToken.in == null : this.in.equals(pushWhereObjectDeviceToken.in));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.in == null ? 0: this.in.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class PushWhereObjectDeviceToken {\n");
    
    sb.append("  in: ").append(in).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
