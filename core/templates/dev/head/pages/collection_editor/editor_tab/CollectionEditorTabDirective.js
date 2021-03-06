// Copyright 2016 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Controller for the main tab of the collection editor.
 */

oppia.directive('collectionEditorTab', [
  'UrlInterpolationService', function(UrlInterpolationService) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
        '/pages/collection_editor/editor_tab/' +
        'collection_editor_tab_directive.html'),
      controller: [
        '$scope', 'CollectionEditorStateService', 'CollectionLinearizerService',
        function(
            $scope, CollectionEditorStateService, CollectionLinearizerService) {
          $scope.hasLoadedCollection = (
            CollectionEditorStateService.hasLoadedCollection);
          $scope.collection = CollectionEditorStateService.getCollection();

          // Returns a list of collection nodes which represents a valid linear
          // path through the collection.
          $scope.getLinearlySortedNodes = function() {
            return (
              CollectionLinearizerService.getCollectionNodesInPlayableOrder(
                $scope.collection));
          };
        }
      ]
    };
  }]);
