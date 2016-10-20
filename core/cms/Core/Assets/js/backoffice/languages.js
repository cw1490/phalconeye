/*
 +------------------------------------------------------------------------+
 | PhalconEye CMS                                                         |
 +------------------------------------------------------------------------+
 | Copyright (c) 2013-2016 PhalconEye Team (http://phalconeye.com/)       |
 +------------------------------------------------------------------------+
 | This source file is subject to the New BSD License that is bundled     |
 | with this package in the file LICENSE.txt.                             |
 |                                                                        |
 | If you did not receive a copy of the license and are unable to         |
 | obtain it through the world-wide-web, please send an email             |
 | to license@phalconeye.com so we can send you a copy immediately.       |
 +------------------------------------------------------------------------+
 | Author: Ivan Vorontsov <lantian.ivan@gmail.com>                 |
 +------------------------------------------------------------------------+
 */

/**
 * languages additional logic.
 *
 * @category  PhalconEye
 * @package   PhalconEye Core Module
 * @author    Ivan Vorontsov <lantian.ivan@gmail.com>
 * @copyright Copyright (c) 2013-2016 PhalconEye Team
 * @license   New BSD License
 * @link      http://phalconeye.com/
 */

(function (window, $, root, undefined) {
    $(function () {
        var form = $('#languages-import-form'),
            file = $('[name="file"]', form);

        $('.btn-import').click(function () {
            file.trigger('click');
        });

        file.change(function () {
            form.submit();
        });
    });
}(window, jQuery, PhalconEye));
