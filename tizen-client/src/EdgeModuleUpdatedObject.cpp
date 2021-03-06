#include <map>
#include <cstdlib>
#include <glib-object.h>
#include <json-glib/json-glib.h>
#include "Helpers.h"


#include "EdgeModuleUpdatedObject.h"

using namespace std;
using namespace Tizen::ArtikCloud;

EdgeModuleUpdatedObject::EdgeModuleUpdatedObject()
{
	//__init();
}

EdgeModuleUpdatedObject::~EdgeModuleUpdatedObject()
{
	//__cleanup();
}

void
EdgeModuleUpdatedObject::__init()
{
	//
	//
	//updated = std::string();
	//
}

void
EdgeModuleUpdatedObject::__cleanup()
{
	//if(updated != NULL) {
	//
	//delete updated;
	//updated = NULL;
	//}
	//
}

void
EdgeModuleUpdatedObject::fromJson(char* jsonStr)
{
	JsonObject *pJsonObject = json_node_get_object(json_from_string(jsonStr,NULL));
	JsonNode *node;
	const gchar *updatedKey = "updated";
	node = json_object_get_member(pJsonObject, updatedKey);
	if (node !=NULL) {
	

		if (isprimitive("std::string")) {
			jsonToValue(&updated, node, "std::string", "");
		} else {
			
		}
	}
}

EdgeModuleUpdatedObject::EdgeModuleUpdatedObject(char* json)
{
	this->fromJson(json);
}

char*
EdgeModuleUpdatedObject::toJson()
{
	JsonObject *pJsonObject = json_object_new();
	JsonNode *node;
	if (isprimitive("std::string")) {
		std::string obj = getUpdated();
		node = converttoJson(&obj, "std::string", "");
	}
	else {
		
	}
	const gchar *updatedKey = "updated";
	json_object_set_member(pJsonObject, updatedKey, node);
	node = json_node_alloc();
	json_node_init(node, JSON_NODE_OBJECT);
	json_node_take_object(node, pJsonObject);
	char * ret = json_to_string(node, false);
	json_node_free(node);
	return ret;
}

std::string
EdgeModuleUpdatedObject::getUpdated()
{
	return updated;
}

void
EdgeModuleUpdatedObject::setUpdated(std::string  updated)
{
	this->updated = updated;
}


