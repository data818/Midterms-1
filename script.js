const apiUrl = "https://api.github.com/users/data818";

fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileDiv = document.getElementById("profile-info");
    // github information
    profileDiv.innerHTML =
      "<p ><span>Login:</span>" +
      data.login +
      "<p ><span>id:</span>" +
      data.id +
      "<p ><span>node_id:</span>" +
      data.node_id +
      "</p>" +
      "<p ><span>gravatar_id:` `,</span>" +
      data.gravatar_id +
      "<p ><span>avatar_url:</span>" +
      data.avatar_url +
      "<p ><span >following: </span>" +
      data.following_url +
      "</p>" +
      "<p ><span>gists_url:</span>" +
      data.gists_url +
      "<p ><span>starred_url:</span>" +
      data.starred_url +
      "<p ><span>subscriptions_url:</span>" +
      data.subscriptions_url +
      "<p ><span>organizations_url:</span>" +
      data.organizations_url +
      "<p ><span>repos_url:</span>" +
      data.repos_url +
      "<p ><span>events_url:</span>" +
      data.events_url +
      "<p ><span>received_events_url:</span>" +
      data.received_events_url +
      "<p ><span>type:</span>" +
      data.type +
      "<p ><span>user_view_type:</span>" +
      data.user_view_type +
      "<p ><span>site_admin:</span>" +
      data.site_admin +
      "<p ><span>name:</span>" +
      data.name +
      "<p ><span>company:</span>" +
      data.company +
      "<p ><span>blog:` `,</span>" +
      data.blog +
      "<p ><span>html_url:</span>" +
      data.html_url +
      "</a></p>" +
      "<p ><span >Public repos: </span>" +
      data.public_repos +
      "</p>" +
      "<p ><span>Location: </span>" +
      data.location +
      "<p ><span>Email:</span>" +
      data.Email +
      "</p>" +
      "<p ><span>hireable:</span>" +
      data.hireable +
      "<p ><span>twitter_username:</span>" +
      data.twitter_username +
      "<p ><span>Bio: </span>" +
      data.bio +
      "<p ><span>followers:</span>" +
      data.followers +
      "<p ><span>following:</span>" +
      data.following +
      "<p ><span>created_at:</span>" +
      data.created_at +
      "<p ><span>updated_at:</span>" +
      data.updated_at +
      "</p>";
  })
  .catch(function (error) {
    console.log("no information: ", error);
  });
