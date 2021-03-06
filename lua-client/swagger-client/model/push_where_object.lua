--[[
  EMS API Documentation
 
  Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps
 
  OpenAPI spec version: 0.0.0
  
  Generated by: https://github.com/swagger-api/swagger-codegen.git
]]

-- push_where_object class
local push_where_object = {}
local push_where_object_mt = {
	__name = "push_where_object";
	__index = push_where_object;
}

local function cast_push_where_object(t)
	return setmetatable(t, push_where_object_mt)
end

local function new_push_where_object(device_type, device_token)
	return cast_push_where_object({
		["deviceType"] = device_type;
		["deviceToken"] = device_token;
	})
end

return {
	cast = cast_push_where_object;
	new = new_push_where_object;
}
