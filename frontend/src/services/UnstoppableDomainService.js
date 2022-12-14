import NetworkService from "./NetworkService";

const UnstoppableDomainService = {
  createUnstoppableDomain: function (obj, session) {
    return NetworkService.postResourceWithAuth(
      "v1/unstoppableDomain",
      obj,
      session
    );
  },
  updateUnstoppableDomain: function (id, obj, session) {
    return NetworkService.putResourceWithAuth(
      "v1/unstoppableDomain/" + id,
      obj,
      session
    );
  },
  deleteUnstoppableDomain: function (id, session) {
    return NetworkService.deleteResourceWithAuth(
      "v1/unstoppableDomain/" + id,
      session
    );
  },
  getUnstoppableDomain: function (id, session) {
    return NetworkService.getResourceWithAuth(
      "v1/unstoppableDomain/" + id,
      session
    );
  },
};
export default UnstoppableDomainService;
