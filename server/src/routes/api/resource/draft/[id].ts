import { DraftResource } from "../../../../models/Resource";
import { ObjectId } from "bson";
import { isAdmin } from "../../../../utility/authHelpers";

export async function get(req, res, next) {
  const { id } = req.params;
  let draftResource = null;
  try {
    draftResource = await DraftResource.getByRecordId(
      ObjectId.createFromHexString(id)
    );
  } catch (e) {
    res.writeHead(500, {
      "Content-Type": "application/json"
    });

    return res.end(
      JSON.stringify({
        message: e.message
      })
    );
  }

  if (draftResource) {
    if (!isAdmin(req)) {
      // don't allow non-admins to see who created a resource
      delete draftResource.createdBy;
    }
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({ draftResource }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Resource not found`
      })
    );
  }
}
